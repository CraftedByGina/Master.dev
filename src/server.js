import fs from 'node:fs/promises'
import http from 'node:http'
import open from 'open'

export const interpolate = (html, data) => {
  return html.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, placeholder) => {
    return data[placeholder] || '';
  });
}
// take an html string and object with data on it.  It will replace every instance of {{notes}}. -> data.notes
// The regex pattern looks for double brackets containing a word, globally across the entire string, to identify placeholders that need to be replaced with matching data values

export const formatNotes = (notes) => {
  return notes.map(note => {
    return `
      <div class="note">
        <p>${note.content}</p>
        <div class="tags">
          ${note.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    `
  }).join('\n')
}
// take in notes array from our database and convert to divs. We want a div for each note
//Using the map() method to transform each note into an HTML string containing a div with the note's content and tags. Since map() returns an array, the results should be joined into a single string using join() to create valid HTML.

export const createServer = (notes) => {
  return http.createServer(async (req, res) => {
    const HTML_PATH = new URL('./template.html', import.meta.url).pathname
    const template = await fs.readFile(HTML_PATH, 'utf-8')
    const html = interpolate(template, {notes: formatNotes(notes)})
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
  });
}
//create server that will be able to grab the HTML file that we have and interperlote it with the formated notes and send it back to the client 


export const start = (notes, port) => {
  const server = createServer(notes)
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
  open(`http://localhost:${port}`)
}