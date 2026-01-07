import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  isEditing = false;

  newUser: User = {
    name: '',
    podName: '',
    domainName: ''
  };

  constructor(private userService: UserService,
    private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('Component initialized, loading users...');
    this.loadUsers();
  }

  loadUsers(): void {
    console.log('loadUsers() called');
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log('Users loaded:', data);
        console.log('Users array length:', data?.length);
        console.log('Users array type:', Array.isArray(data));
        this.users = Array.isArray(data) ? data : [];
        console.log('this.users after assignment:', this.users);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading users:', error);
        alert('Failed to load users. Make sure the backend is running on http://localhost:5000');
      }
    });
  }

  onSubmit(): void {
    if (this.isEditing && this.selectedUser) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }

  createUser(): void {
    if (this.newUser.name && this.newUser.podName && this.newUser.domainName) {
      this.userService.createUser(this.newUser).subscribe({
        next: () => {
          this.loadUsers();
          this.resetForm();
        },
        error: (error) => {
          console.error('Error creating user:', error);
          alert('Failed to create user');
        }
      });
    }
  }

  editUser(user: User): void {
    this.isEditing = true;
    this.selectedUser = user;
    this.newUser = { ...user };
  }

  updateUser(): void {
    if (this.selectedUser && this.selectedUser.id) {
      this.userService.updateUser(this.selectedUser.id, this.newUser).subscribe({
        next: () => {
          this.loadUsers();
          this.resetForm();
        },
        error: (error) => {
          console.error('Error updating user:', error);
          alert('Failed to update user');
        }
      });
    }
  }

  deleteUser(id: number | undefined): void {
    if (id && confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.loadUsers();
        },
        error: (error) => {
          console.error('Error deleting user:', error);
          alert('Failed to delete user');
        }
      });
    }
  }

  resetForm(): void {
    this.newUser = {
      name: '',
      podName: '',
      domainName: ''
    };
    this.selectedUser = null;
    this.isEditing = false;
  }
}
