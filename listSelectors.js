const fs = require("fs");

// --- CONFIG ---
const htmlFile = "index.html";

// --- SCRIPT ---
const html = fs.readFileSync(htmlFile, "utf8");

// Extract classes
const classRegex = /class\s*=\s*["']([^"']+)["']/gi;
let classes = [];
let match;
while ((match = classRegex.exec(html)) !== null) {
  classes.push(...match[1].split(/\s+/));
}

// Extract ids
const idRegex = /id\s*=\s*["']([^"']+)["']/gi;
let ids = [];
while ((match = idRegex.exec(html)) !== null) {
  ids.push(match[1]);
}

// Extract element tags
const tagRegex = /<([a-zA-Z0-9-]+)/g;
let tags = [];
while ((match = tagRegex.exec(html)) !== null) {
  tags.push(match[1]);
}

// Deduplicate
classes = [...new Set(classes)].map(c => "." + c);
ids = [...new Set(ids)].map(i => "#" + i);
tags = [...new Set(tags)];

// Output
console.log("Classes:", classes);
console.log("IDs:", ids);
console.log("Tags:", tags);
