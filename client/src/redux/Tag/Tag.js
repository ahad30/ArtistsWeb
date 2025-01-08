export const tags = [
 
  // Admin
  {
    name: 'Admin', 
    tag: 'admin', 
  },
  {
    name: 'projects', 
    tag: 'Projects', 
  },



];

export const getTagsByModuleName = (moduleName) => {
  return tags
    .filter(tag => tag.name.toLowerCase() === moduleName.toLowerCase())
    .map(tag => tag.tag);
};