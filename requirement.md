Act as an Expert Frontend Web Developer and UI/UX Designer. Your task is to build a complete, modern, and high-performance portfolio website for an Informatics Engineering student specializing in Web Development and Robotics.

TECH STACK:
- Framework: Next.js 16.1 (App Router) & React 19
- Language: TypeScript
- Styling: Tailwind CSS v4
- Animation: Framer Motion & React Three Fiber (Three.js) for 3D elements
- Icons: Lucide React

DESIGN GUIDELINES:
- Theme: Dark mode and light mode toggle, futuristic, cyber-minimalist, professional.
- Typography: Clean sans-serif (e.g., Inter or Roboto Mono for technical accents).
- Tone: Professional, visionary, and technical.
- STRICT RULE: Keep emoji usage to an absolute minimum. Rely on clean UI components, typography, and Lucide React icons for visual cues instead of emojis.
- IMAGE SLOTS: Whenever an image, 3D model, or visual asset is needed, use explicitly marked placeholders like `[SLOT_GAMBAR_NAMA_ASSET]`.

PORTFOLIO CONTENT & STRUCTURE (7 Sections):

1. Hero Section (3D Interactive)
- Visual: `[SLOT_GAMBAR_3D_ASV_BOAT_MODEL]` (A placeholder for a 3D model of an Autonomous Surface Vehicle or robotics element using Three.js).
- Greeting: "Hi there, I'm Nabil."
- Headline: "Informatics Engineering Student | Web Developer & Robotics Programmer."
- Sub-headline: "Merging robust web development with automation and computer vision to build future-ready solutions."
- Quote: "Done is better than perfect, but keep improving."
- CTA Buttons: "View Projects" and "Contact Me".

2. About Me
- Visual: `[SLOT_GAMBAR_PROFIL_PROFESIONAL]`
- Content: 4th-semester Informatics Engineering student at Universitas Maritim Raja Ali Haji (UMRAH). Detail the focus on software development and robotics systems. Mention the daily usage of Ubuntu 24.04 LTS as the primary development environment to show technical depth.

3. Experience & Achievements (Crucial Section)
- Visual: `[SLOT_GAMBAR_KEGIATAN_ROBOTIKA_UMRAH]`
- Role: Head of the Programmer Division (Ketua Divisi Pemrograman) for Robotika UMRAH 2026.
- Responsibilities: Leading the R&D roadmap for the programming division, managing technical documentation, and developing automation logic.
- Target/Achievement: Won an award as a programmer for ASV Navantara. Currently planning to further develop the ASV Navantara system and spearheading software and automation research for the National Unmanned Fast Boat Contest (Kontes Kapal Indonesia - KKI) 2026.

4. Certificates
- Credentials & Achievements: A showcase of completed courses, certifications, and recognized achievements.
- Visual: `[SLOT_GAMBAR_SERTIFIKAT_NAMA]`

5. Projects
- Project 1: RentalKu. 
  - Visual: `[SLOT_GAMBAR_PROJECT_RENTALKU_UI]`
  - Description: A modern car rental and tour package booking platform built with Next.js and Tailwind CSS, focusing on industry-standard UI/UX.
- Project 2: ASV Navantara Research & Development.
  - Visual: `[SLOT_GAMBAR_PROJECT_ASV_TESTING]`
  - Description: Award-winning robotics research for ASV Navantara focusing on Python-based backend logic and GNSS/RTK sensor integration for autonomous navigation, with plans for further system development.

6. Skills & Tech Stack
- Display as clean, minimalistic badges or a grid.
- Languages: Python (Data Structures, Algorithms), JavaScript, TypeScript.
- Frontend: Next.js 16, React 19, Tailwind CSS v4, Three.js.
- OS & Tools: Ubuntu Linux, Git, Docker.

7. Connect With Me
- Visual: Clean contact form interface.
- Links: GitHub (nabilanaufal12), LinkedIn, Instagram (_mizuuu12).
- Feature: Include a direct message form and a button to download CV (`[SLOT_DOKUMEN_CV_PDF]`).

YOUR DELIVERABLES:
1. Briefly outline the file structure (app directory, components, etc.).
2. Provide the complete code for the main landing page (`app/page.tsx`) integrating all these sections.
3. Provide the code for 2-3 key reusable components (e.g., the Project Card component and the Hero component with the 3D slot).
Ensure the code is modular, responsive, and ready to be pasted into a fresh Next.js project.