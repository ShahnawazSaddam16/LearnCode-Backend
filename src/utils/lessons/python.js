module.exports = [
  {
    order: 1,
    title: "Variables, Lists, and Dictionaries",
    theory: "Python is dynamically typed, so variables don't need explicit type declarations. Lists are ordered mutable collections, and dictionaries store key value pairs for fast lookups.",
    code: `name = "Shahnawaz"
skills = ["Node.js", "React", "MongoDB"]
profile = {"name": name, "skills": skills}

print(profile)`,
  },
  {
    order: 2,
    title: "Functions and Object-Oriented Programming",
    theory: "Functions in Python are defined with def and can take default arguments. Classes bundle data and behavior together using the __init__ constructor to set instance attributes.",
    code: `class Developer:
    def __init__(self, name, stack):
        self.name = name
        self.stack = stack

    def introduce(self):
        return f"{self.name} works with {self.stack}"

dev = Developer("Shahnawaz", "MERN")
print(dev.introduce())`,
  },
];