# HOW TO USE THIS WEBSITE

Congratulations on your new portfolio website! Here is how to finalize it and get it live on GitHub Pages.

## 1. Prepare your Assets
- Navigate to the `assets/` folder (you may need to create it if it's missing from your local machine).
- **Profile Photo**: Save your profile picture in the `assets/` folder. Update the `src` attribute in `index.html` to point to it (e.g., `src="assets/my-photo.jpg"`).
- **Resume PDF**: Save your resume as a PDF in the `assets/` folder. Rename the files or update the links in `resume.html` to match your filename.

## 2. Edit Text & Information
- Most of your provided information is already integrated!
- If you need to change anything later, search for the text in the `.html` files.
- To change colors or fonts, edit the `:root` variables at the top of `style.css`.

## 3. Upload to GitHub
1. Create a new repository on GitHub named `yourusername.github.io` (or any name you like).
2. Upload all the files (index.html, about.html, projects.html, resume.html, style.css, script.js, and the assets folder).
3. Push the code to the `main` branch.

## 4. Publish via GitHub Pages
1. Go to your repository **Settings** tab.
2. Select **Pages** from the sidebar.
3. Under **Build and deployment**, ensure the source is set to "Deploy from a branch" and the branch is "main" (folder "/root").
4. Once saved, your site will be live at `https://yourusername.github.io/`!

## 5. Maintenance
- **Projects**: To add more projects, copy and paste a `<div class="project-card">` block in `projects.html`.
- **Theme**: The website includes a built-in dark mode toggle. It saves the user's preference automatically.

---
Built with pride for Kyungmin Kim.
