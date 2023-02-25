// This is a simple example Widget to get you started with Übersicht.
// For the full documentation please visit:
// https://github.com/felixhageloh/uebersicht

// You can modify this widget as you see fit, or simply delete this file to
// remove it.

// this is the shell command that gets executed every time this widget refreshes
// export const command = "whoami";

// the refresh frequency in milliseconds
export const refreshFrequency = 1000000;

// the CSS style for this widget, written using Emotion
// https://emotion.sh/
export const className = `
  top: 10%;
  right: 0;
  left: 0;
  width: 1000px;
  height: 720px;
  box-sizing: border-box;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.9);
  iframe {
    height: 100%;
    width: 100%;
  }
`

// render gets called after the shell command has executed. The command's output
// is passed in as a string.
export const render = ({ output }) => {
  return (
    <iframe src="https://lgf2111.github.io/assessments/" frameborder="0"></iframe>
  );
}

