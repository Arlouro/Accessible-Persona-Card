export interface PersonaDescriptionSection {
  heading: string;
  content: string;
}

export interface Persona {
  title: string;
  description: PersonaDescriptionSection[];
}