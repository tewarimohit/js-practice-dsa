// Trees: It is a hierarchial data structure that consists of nodes connected be edges.
// It is a non- linear data structure when compared to arrays , linked lists, stacks and queues which are linear data structures.
// In linear data structures time required to search is proportional to the size of data set
// Trees owing to non linear structure allow quicker and easier access to the data.
// A tree will not contain any loop or cycle.

//                                            A -> Node
//                                          / | \
//                                         /  |  \
//                                        B   C   D
//                                       / \
//                                      /   \ -> Edges
//                                     E     F

// edges -> lines.

// usage: DOM, chatbot, file system for directory structure, a family tree, organisation tree etc

// Terminology: parent and child node  ex: A<->D, A<->C, A<->B
// root node: from where the tree originates ex: A
// leaf nodes: nodes without any child node. ex: E,F,C,D
// siblings : node with same parent ex: B,C, D and E,F
// Ancestor node: node that has parents parent. ex: A is ancestor node of E,F
// Path: sequence of node from one point to another. ex : path (A,E) is A-B-E
// Distance: Edges from one node to other. Distance (A,E) is 2.
// Degree of a node: no of child node it has. Degree(B) is 2
// Degree of a tree : max node in tree. Degree of this tree 3 which is degree of A.
// Depth of node: no of edges from root to that node. ex: depth of E is 2.
// depth of root node is always 0.
// Height of node: no of edges from deepest leaf to that node. ex: Height of B is 1
// height of root node is height of tree 2
