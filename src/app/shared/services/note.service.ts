import { Injectable, signal } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({ providedIn: 'root' })
export class NoteService {
  private _notes = signal<Note[]>([]);
  readonly notes = this._notes.asReadonly();

  /**
   * Adds a new note.
   * @param note - Note object to add.
   */
  public addNote(note: Note) {
    this._notes.update((prev) => [...prev, note]);
  }

  /**
   * Updates an existing note.
   * @param id - ID of the note to update.
   * @param updatedFields - Fields to update.
   */
  public updateNote(id: string, updatedFields: Partial<Note>) {
    this._notes.update((notes) =>
      notes.map((note) =>
        note.id === id ? { ...note, ...updatedFields } : note
      )
    );
  }

  /**
   * Deletes a note by ID.
   * @param id - ID of the note to delete.
   */
  public deleteNote(id: string) {
    this._notes.update((notes) => notes.filter((note) => note.id !== id));
  }

  /**
   * Filters notes by title or content.
   * @param query - Search term.
   * @returns Array of matching notes.
   */
  public searchNotes(query: string): Note[] {
    return this._notes().filter(
      (note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase())
    );
  }
}
