export function buildPortraitPrompt(): string {
  return [
    "Hyperrealistic full-body portrait of a stylish young man sitting confidently on a black metal chair in a minimalist studio.",
    "Wardrobe: dark green long-sleeve shirt with front chest pockets; beige wide-leg trousers with faint pinstripes; white socks; glossy black platform dress shoes.",
    "Pose: hands clasped together, elbows resting on knees, direct eye contact, calm and assertive expression.",
    "Background: soft turquoise gradient with a warm yellow spotlight glow behind the head (subtle halo).",
    "Camera: 85mm portrait lens, ISO 100, shutter 1/125s, aperture f/2.0, tripod-mounted, eye-level framing.",
    "Lighting: single softbox key at 45? front-left for natural highlights; fill at 25% power on right to balance shadows; backlight diffuser to create subtle halo.",
    "Style: ultra-detailed hyperrealistic studio photography, 8K resolution look, cinematic color grading, clean shadows, realistic lighting falloff, natural skin texture, editorial fashion tone.",
    "Depth of field: focus on face and shoes; tasteful bokeh in background."
  ].join(" \n");
}
