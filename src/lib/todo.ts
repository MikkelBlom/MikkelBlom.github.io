// Missing media keeps its `needed` note in content.ts as a reminder, but the slot is never drawn.
// Build with SHOW_TODO=1 to see the "Image needed" boxes again while gathering material.
export const showTodo = process.env.SHOW_TODO === '1'

type Slot = { src?: string | null; illustration?: string; youtube?: string; file?: string }
export const hasMedia = (m: Slot) => Boolean(m.src || m.illustration || m.youtube || m.file)
export const visible = (m: Slot) => showTodo || hasMedia(m)
