export type AgentType =
  | 'Bonzi'
  | 'Clippy'
  | 'F1'
  | 'Genie'
  | 'Genius'
  | 'Links'
  | 'Merlin'
  | 'Peedy'
  | 'Rocky'
  | 'Rover';

const AGENTS: Record<Uppercase<AgentType>, AgentType> = {
  BONZI: 'Bonzi',
  CLIPPY: 'Clippy',
  F1: 'F1',
  GENIE: 'Genie',
  GENIUS: 'Genius',
  LINKS: 'Links',
  MERLIN: 'Merlin',
  PEEDY: 'Peedy',
  ROCKY: 'Rocky',
  ROVER: 'Rover',
};

export default AGENTS;
