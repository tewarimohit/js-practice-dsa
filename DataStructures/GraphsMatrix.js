// Graphs: It is a non - linear data structure that consist of a finite no of vertices also called nodes connected by edges.
// Tree is a specific type of data structure.
// No hierarchy in graphs.
// Types of graphs: Directed and undirected.

// Directed Graph: Graph in which edges have direction.
// Edges are usually represented by arrow pointing in the direction the graph can be traversed.

// Undirected Graphs: edges are bidirectional
// the graph can be traversed in either direction. Absense of an arrow.
// uses: Google maps - cities are vertices, and roads as edges to build a navigation system.
// social media sites: users are vertices and edges are links b/w connections

// Graph represintation:
// 1 using adjacency matrix
// 2 using adjacency list

// 1.Adjacency matrix: it is a 2D array of size V X V where v is the no of vertices in graph. Each row and column represent vertex.
// if the value of  any element say , matrix [[i] [j] ] is 1, it represent there is an edge connecting vertex i and vertex j.

const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

console.log(matrix[0][1]);

const adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  c: ["B"],
};

console.log(adjacencyList["B"]);
