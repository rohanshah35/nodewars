import React, { useState } from "react";
import { Badge, Text, UnstyledButton } from "@mantine/core";

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['300'] });

export function Skills() {
  const skills = [
    { name: "Divide and Conquer", count: 40 },
    { name: "Hash Table", count: 18 },
    { name: "Math", count: 12 },
    { name: "Array", count: 25 },
    { name: "Two Pointers", count: 22 },
    { name: "String", count: 15 },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? skills : skills.slice(0, 3);

  return (
    <div>
      <Text
        ta="center"
        fz="sm"
        style={{ color: "#f4f4f5", marginBottom: "1.2rem", fontFamily: inter.style.fontFamily }}
      >
        SKILLS
      </Text>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          maxWidth: "300px",
          margin: "0 auto",
        }}
      >
        {visibleSkills.map((skill) => (
          <Badge
            key={skill.name}
            size="md"
            radius="md"
            style={{
              backgroundColor: "#27272a",
              color: "#f4f4f5",
              border: "1px solid #3f3f46",
              padding: "0.25rem 0.75rem",
              boxSizing: "border-box",
              textAlign: "center",
              width: "auto",
              fontFamily: inter.style.fontFamily,
              textTransform: "none",
            }}
          >
            <span style={{ textTransform: "uppercase" }}>{skill.name}</span>
            <span style={{ fontWeight: "normal" }}> x{skill.count}</span>
          </Badge>
        ))}
      </div>
      {skills.length > 4 && (
        <UnstyledButton
          variant="subtle"
          size="xs"
          onClick={() => setShowAll(!showAll)}
          fw={500}
          style={{ color: "#c4c4c7", marginTop: "1rem", fontFamily: inter.style.fontFamily, fontSize: "0.65rem" }}
        >
          {showAll ? "Show Less" : "Show More"}
      </UnstyledButton>
      )}
    </div>
  );
}