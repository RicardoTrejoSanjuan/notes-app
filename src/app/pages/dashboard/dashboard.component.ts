import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Component, effect, signal } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Note } from '../../shared/models/note.model';
import { NoteService } from '../../shared/services/note.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  title = '';
  content = '';
  searchText = '';

  cols = signal(2);

  constructor(
    private noteService: NoteService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.cols.set(result.matches ? 1 : 2);
      });
  }

  get filteredNotes(): Note[] {
    const query = this.searchText.trim().toLowerCase();
    return query
      ? this.noteService
          .notes()
          .filter(
            (note) =>
              note.title.toLowerCase().includes(query) ||
              note.content.toLowerCase().includes(query)
          )
      : this.noteService.notes();
  }

  saveNote() {
    if (this.title && this.content) {
      this.noteService.addNote({
        id: uuid(),
        title: this.title,
        content: this.content,
        createdAt: new Date(),
      });
      this.title = '';
      this.content = '';
    }
  }

  delete(id: string) {
    this.noteService.deleteNote(id);
  }

  edit(note: Note) {
    this.title = note.title;
    this.content = note.content;
    this.noteService.deleteNote(note.id);
  }
}
