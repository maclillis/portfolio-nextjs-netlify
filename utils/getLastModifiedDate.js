const { execSync } = require('child_process');

const getLastModifiedDate = (filePath) => {
  try {
    // Git command to get the last commit date for a specific file
    const gitCommand = `git log -1 --format=%cI -- ${filePath}`;
    const lastModifiedDate = execSync(gitCommand).toString().trim();
    return lastModifiedDate;
  } catch (error) {
    console.error(`Error fetching last modified date for ${filePath}:`, error);
    return null;
  }
};

module.exports = getLastModifiedDate;