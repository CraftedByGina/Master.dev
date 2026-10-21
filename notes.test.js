const add = (num, num2) => num + num2

test('add takes two numbers and returns a sum', () => {
    const result = add(1, 2)

    expect(result).toBe(3)
})
//////////
import { jest } from '@jest/globals';

jest.unstable_mockModule('../src/db.js', () => ({
    insert: jest.fn(),
    getDB: jest.fn(),
    saveDB: jest.fn(),
}));

const { insert, getDB, saveDB } = await import('../src/db.js');
const { newNote, getAllNotes, removeNote } = await import('../src/notes.js');

beforeEach(() => {
    insert.mockClear();
    getDB.mockClear();
    saveDB.mockClear();
})

test('newNote inserts data and returns it', async () => {
    const note = 'Test note';
    const tags = ['tag1', 'tag2'];
    const data = {
        tags,
        content: note,
        id: Date.now(),
    };
    insert.mockResolvedValue(data);

    const result = await newNote(note, tags);
    expect(result).toEqual(data);
});

test('getAllNotes returns all notes', async () => {
    const db = {
        notes: ['note1', 'note2', 'note3']
    };
    getDB.mockResolvedValue(db);

    const result = await getAllNotes();
    expect(result).toEqual(db.notes);
});

test('removeNote does nothing if id is not found', async () => {
    const notes = [
        { id: 1, content: 'note 1' },
        { id: 2, content: 'note 2' },
        { id: 3, content: 'note 3' },
    ];
    saveDB.mockResolvedValue(notes);

    const idToRemove = 4;
    const result = await removeNote(idToRemove);
    expect(result).toBeUndefined();
});

/// Or you can group them together and put all the tests inside a describe 
it('should do this thing'), () => {
    //does something similar to test()
}

describe('cli app', () => {
    test('newNote inserts data and returns it', async () => {
        const note = 'Test note';
        const tags = ['tag1', 'tag2'];
        const data = {
            tags,
            content: note,
            id: Date.now(),
        };
        insert.mockResolvedValue(data);

        const result = await newNote(note, tags);
        expect(result).toEqual(data);
    });

    test('getAllNotes returns all notes', async () => {
        const db = {
            notes: ['note1', 'note2', 'note3']
        };
        getDB.mockResolvedValue(db);

        const result = await getAllNotes();
        expect(result).toEqual(db.notes);
    });

    test('removeNote does nothing if id is not found', async () => {
        const notes = [
            { id: 1, content: 'note 1' },
            { id: 2, content: 'note 2' },
            { id: 3, content: 'note 3' },
        ];
        saveDB.mockResolvedValue(notes);

        const idToRemove = 4;
        const result = await removeNote(idToRemove);
        expect(result).toBeUndefined();
    });
})

//Two common syntaxes are using test() or it(), such as test('description', () => {...}) or it('should do something', () => {...}). Both work similarly, representing different stylistic approaches to writing tests.