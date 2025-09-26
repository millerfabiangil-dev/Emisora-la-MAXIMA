/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #000, #1a1a1a);
  color: #eaeaea;
  line-height: 1.6;
  scroll-behavior: smooth;
  padding-top: 100px;
}

/* HEADER */
header {
  background: #111;
  color: #fff;
  padding: 0.8rem 1rem 1rem;
  box-shadow: 0 4px 12px rgba(255, 0, 0, 0.3);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

/* LOGO */
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.logo {
  max-width: 160px;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 0 5px #ffcc00);
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

/* NAV */
nav {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding-top: 0.3rem;
  border-top: 1px solid #2a2a2a;
  margin-top: 0.5rem;
}

nav a {
  color: #ffcc00;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  position: relative;
  transition: color 0.3s;
}

nav a::after {
  content: '';
  position: absolute;
  height: 2px;
  background: #ffcc00;
  width: 0%;
  bottom: -4px;
  left: 0;
  transition: width 0.3s ease;
}

nav a:hover::after {
  width: 100%;
}

/* SECCIONES GENERALES */
.seccion {
  max-width: 900px;
  margin: 3rem auto;
  background: #1e1e1e;
  border-left: 6px solid #c70000;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(255, 0, 0, 0.2);
}

.seccion h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffcc00;
  text-shadow: 1px 1px 4px #000;
}

/* NOTICIAS */
article {
  background: rgba(255, 204, 0, 0.08);
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #d00000;
  border-radius: 10px;
  color: #f0f0f0;
}

/* PROGRAMACIÓN */
ul {
  list-style: none;
  padding-left: 0;
}

ul li {
  background: rgba(255, 255, 255, 0.04);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border-left: 4px solid #ffcc00;
}

/* AUDIO PLAYER */
audio {
  width: 100%;
  margin-top: 1rem;
  border-radius: 8px;
  outline: none;
}

/* CONTROLES */
.controls {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.controls button {
  background: linear-gradient(90deg, #c70000, #ffcc00);
  color: #000;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s;
}

.controls button:hover {
  background: linear-gradient(90deg, #a80000, #ffd700);
  transform: scale(1.05);
}

/* FOOTER */
footer {
  background: #111;
  text-align: center;
  padding: 1.5rem;
  color: #ffcc00;
  border-top: 2px solid #c70000;
  margin-top: 3rem;
}
