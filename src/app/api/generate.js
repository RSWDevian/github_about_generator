import React from "react";

function generate(details) {
  //* breaking down details
  const { about, skills, links, graphs } = details;

  //? functiont capitalise
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  //? function to show skills
  const renderSkills = () => {
    let output = "";
    for (const [category, values] of Object.entries(skills)) {
      if (Array.isArray(values) && values.length > 0) {
        output += `### ${capitalize(category)}\n\n`;
        output +=
          values
            .map(
              (item) =>
                `<span style="display:inline-block;background-color:#007bff;color:white;padding:4px 8px;margin:2px;border-radius:12px;font-size:12px;">${item}</span>`
            )
            .join(" ") + "\n\n";
      }
    }
    return output;
  };

  //? function to show render links as buttons
  const renderLinks = () => {
    let output = "";
    for (const [category, entries] of Object.entries(links)) {
      if (typeof entries === "object" && entries !== null) {
        const section = Object.entries(entries)
          .filter(([_, value]) => value)
          .map(
            ([key, value]) =>
              `<a href="${value}" target="_blank" style="display:inline-block;margin:4px;padding:8px 12px;background-color:#28a745;color:white;text-decoration:none;border-radius:6px;font-size:14px;">${capitalize(
                key
              )}</a>`
          )
          .join(" ");
        if (section) {
          output += `### ${capitalize(category)} Links\n\n${section}\n\n`;
        }
      } else if (category === "personalwebsite" && entries) {
        output += `### Personal Website\n\n<a href="${entries}" target="_blank" style="display:inline-block;margin:4px;padding:8px 12px;background-color:#17a2b8;color:white;text-decoration:none;border-radius:6px;font-size:14px;">Visit Here</a>\n\n`;
      }
    }
    return output;
  };

  return `
  # 👋 About Me
  
  ${about ? about + "\n" : ""}
  
  ---
  
  ## 🛠️ Skills
  
  ${renderSkills()}
  
  ---
  
  ## 🔗 Links
  
  ${renderLinks()}
  
  ${graphs ? `## 📊 GitHub Stats\n\n![GitHub Graph](${graphs})\n` : ""}
  `;
}

export default generate;
