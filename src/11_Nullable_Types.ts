function greet(name: string | null) {
  if (name) return name.toUpperCase();
  else return "Hi there!";
}

greet(null);
