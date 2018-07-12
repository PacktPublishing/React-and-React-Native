// Mock data...
const users = ['User 1', 'User 2', 'User 3'];

// Resolves the returned promise based on the "desc"
// parameter. If provided, it reverses the "users"
// mock array.
export function fetchUsers(desc) {
  return new Promise(resolve => {
    resolve(desc ? users.slice(0).reverse() : users);
  });
}
