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
  {
    order: 3,
    title: "Control Flow: if, elif, else",
    theory: "Conditional statements let a program branch based on boolean expressions. Python uses indentation instead of braces to define the blocks that belong to each branch.",
    code: `age = 22

if age < 13:
    category = "child"
elif age < 20:
    category = "teenager"
else:
    category = "adult"

print(category)`,
  },
  {
    order: 4,
    title: "Loops: for and while",
    theory: "A for loop iterates over a sequence like a list or range, while a while loop repeats as long as a condition stays true. break and continue control loop flow directly.",
    code: `for i in range(5):
    if i == 3:
        continue
    print(i)

count = 0
while count < 3:
    print("count is", count)
    count += 1`,
  },
  {
    order: 5,
    title: "String Manipulation and Formatting",
    theory: "Strings are immutable sequences with many built-in methods for searching, splitting, and transforming text. f-strings embed expressions directly inside string literals for readable formatting.",
    code: `name = "shahnawaz"
title = name.title()
words = "Node.js, React, MongoDB".split(", ")

message = f"{title} knows {len(words)} technologies: {', '.join(words)}"
print(message)`,
  },
  {
    order: 6,
    title: "Tuples and Sets",
    theory: "Tuples are ordered and immutable, useful for fixed collections like coordinates. Sets are unordered collections of unique elements, ideal for membership checks and removing duplicates.",
    code: `point = (10, 20)
x, y = point

skills = ["Node.js", "React", "Node.js", "MongoDB"]
unique_skills = set(skills)

print(point, unique_skills)`,
  },
  {
    order: 7,
    title: "List Comprehensions",
    theory: "List comprehensions build a new list from an existing iterable in a single expressive line, optionally filtering elements with a condition, replacing more verbose for-loop patterns.",
    code: `numbers = range(10)
squares = [n * n for n in numbers]
even_squares = [n * n for n in numbers if n % 2 == 0]

print(squares)
print(even_squares)`,
  },
  {
    order: 8,
    title: "Dictionary and Set Comprehensions",
    theory: "The comprehension syntax extends to dictionaries and sets, letting you transform an iterable into a mapping or a unique collection in one concise expression.",
    code: `words = ["node", "react", "mongo"]
lengths = {word: len(word) for word in words}
initials = {word[0] for word in words}

print(lengths)
print(initials)`,
  },
  {
    order: 9,
    title: "Functions: *args and **kwargs",
    theory: "*args collects extra positional arguments into a tuple, and **kwargs collects extra keyword arguments into a dictionary, letting a function accept a flexible number of inputs.",
    code: `def summarize(title, *tags, **details):
    print("Title:", title)
    print("Tags:", tags)
    print("Details:", details)

summarize("Backend API", "node", "express", author="Shahnawaz", status="active")`,
  },
  {
    order: 10,
    title: "Lambda Functions",
    theory: "A lambda is a small anonymous function defined in a single expression, commonly used inline as an argument to functions like sorted, map, or filter.",
    code: `users = [{"name": "Ali", "age": 30}, {"name": "Sara", "age": 25}]
sorted_users = sorted(users, key=lambda u: u["age"])

names = list(map(lambda u: u["name"], sorted_users))
print(names)`,
  },
  {
    order: 11,
    title: "Error Handling with try/except",
    theory: "try/except catches exceptions raised during execution, preventing a program from crashing. finally runs cleanup code regardless of whether an exception occurred.",
    code: `def divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("Cannot divide by zero")
        return None
    finally:
        print("Division attempted")

print(divide(10, 2))
print(divide(10, 0))`,
  },
  {
    order: 12,
    title: "Custom Exceptions",
    theory: "Custom exception classes subclass Exception to represent domain-specific error conditions, making error handling more descriptive and easier to catch selectively.",
    code: `class InsufficientBalanceError(Exception):
    pass

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientBalanceError("Not enough funds")
    return balance - amount

try:
    withdraw(100, 150)
except InsufficientBalanceError as e:
    print("Error:", e)`,
  },
  {
    order: 13,
    title: "File I/O and Context Managers",
    theory: "The with statement opens a file as a context manager, automatically closing it once the block exits, even if an error occurs, which prevents resource leaks.",
    code: `with open("notes.txt", "w") as f:
    f.write("Building a WhatsApp bot\\n")
    f.write("Integrating Groq API\\n")

with open("notes.txt", "r") as f:
    content = f.read()

print(content)`,
  },
  {
    order: 14,
    title: "Working with JSON",
    theory: "The json module converts between Python objects and JSON strings. json.dumps serializes a Python object to a string, and json.loads parses a JSON string back into Python data.",
    code: `import json

profile = {"name": "Shahnawaz", "skills": ["Node.js", "Python"]}

json_string = json.dumps(profile, indent=2)
print(json_string)

parsed = json.loads(json_string)
print(parsed["skills"])`,
  },
  {
    order: 15,
    title: "Modules and Packages",
    theory: "A module is a single Python file, and a package is a directory of modules with an __init__.py file. import and from...import bring code from one file into another.",
    code: `# utils.py
def greet(name):
    return f"Hello, {name}!"

# main.py
from utils import greet

print(greet("Shahnawaz"))`,
  },
  {
    order: 16,
    title: "Virtual Environments and pip",
    theory: "Virtual environments isolate a project's dependencies from the system-wide Python installation, preventing version conflicts between different projects.",
    code: `# Create a virtual environment
python -m venv venv

# Activate it (Linux/Mac)
source venv/bin/activate

# Install a package
pip install requests

# Save dependencies
pip freeze > requirements.txt

# Install from requirements
pip install -r requirements.txt`,
  },
  {
    order: 17,
    title: "Inheritance and Polymorphism",
    theory: "A subclass inherits attributes and methods from a parent class and can override them. Polymorphism lets different classes respond to the same method call in their own way.",
    code: `class Animal:
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return "Woof"

class Cat(Animal):
    def speak(self):
        return "Meow"

for animal in [Dog(), Cat()]:
    print(animal.speak())`,
  },
  {
    order: 18,
    title: "Encapsulation and Properties",
    theory: "A leading underscore signals an attribute is intended as internal. The @property decorator lets a method be accessed like an attribute, enabling validation logic on get and set.",
    code: `class BankAccount:
    def __init__(self, balance):
        self._balance = balance

    @property
    def balance(self):
        return self._balance

    @balance.setter
    def balance(self, value):
        if value < 0:
            raise ValueError("Balance cannot be negative")
        self._balance = value

account = BankAccount(100)
account.balance = 200
print(account.balance)`,
  },
  {
    order: 19,
    title: "Magic Methods (Dunder Methods)",
    theory: "Dunder methods like __str__, __eq__, and __len__ let custom classes integrate with built-in Python behavior, such as printing, comparison, and length checks.",
    code: `class Cart:
    def __init__(self, items):
        self.items = items

    def __len__(self):
        return len(self.items)

    def __str__(self):
        return f"Cart with {len(self.items)} items"

cart = Cart(["book", "pen"])
print(len(cart))
print(cart)`,
  },
  {
    order: 20,
    title: "Static and Class Methods",
    theory: "Instance methods take self and operate on an object. staticmethod defines a function with no implicit first argument, and classmethod receives the class itself, often used for alternate constructors.",
    code: `class User:
    def __init__(self, name):
        self.name = name

    @classmethod
    def from_string(cls, data):
        name = data.split(":")[1]
        return cls(name)

    @staticmethod
    def is_valid_name(name):
        return len(name) > 0

user = User.from_string("user:Shahnawaz")
print(user.name, User.is_valid_name(user.name))`,
  },
  {
    order: 21,
    title: "Abstract Base Classes",
    theory: "The abc module defines abstract base classes with methods that subclasses must implement. This enforces a consistent interface across different implementations of a concept.",
    code: `from abc import ABC, abstractmethod

class PaymentProcessor(ABC):
    @abstractmethod
    def process(self, amount):
        pass

class StripeProcessor(PaymentProcessor):
    def process(self, amount):
        return f"Processed \${amount} via Stripe"

processor = StripeProcessor()
print(processor.process(50))`,
  },
  {
    order: 22,
    title: "Iterators and the Iterator Protocol",
    theory: "An iterable defines __iter__, and an iterator defines __next__ and raises StopIteration when exhausted. Implementing this protocol lets a custom class work with for loops directly.",
    code: `class Countdown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        value = self.current
        self.current -= 1
        return value

for number in Countdown(3):
    print(number)`,
  },
  {
    order: 23,
    title: "Generators and yield",
    theory: "A generator function uses yield to produce a sequence of values lazily, one at a time, without storing the entire sequence in memory, making it efficient for large or infinite sequences.",
    code: `def fibonacci(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

for num in fibonacci(20):
    print(num)`,
  },
  {
    order: 24,
    title: "Decorators",
    theory: "A decorator wraps a function to add behavior before or after it runs, without modifying the original function's code. They're commonly used for logging, timing, and access control.",
    code: `import time

def timed(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.time() - start:.4f}s")
        return result
    return wrapper

@timed
def slow_add(a, b):
    time.sleep(1)
    return a + b

print(slow_add(2, 3))`,
  },
  {
    order: 25,
    title: "Closures",
    theory: "A closure is an inner function that remembers variables from its enclosing scope even after that outer function has finished executing, useful for creating configurable function factories.",
    code: `def make_multiplier(factor):
    def multiply(number):
        return number * factor
    return multiply

double = make_multiplier(2)
triple = make_multiplier(3)

print(double(5), triple(5))`,
  },
  {
    order: 26,
    title: "Working with Dates and Times",
    theory: "The datetime module represents points in time and supports arithmetic between them. timedelta represents a duration, letting you add or subtract time spans from a date.",
    code: `from datetime import datetime, timedelta

now = datetime.now()
deadline = now + timedelta(days=7)

print("Now:", now.strftime("%Y-%m-%d %H:%M"))
print("Deadline:", deadline.strftime("%Y-%m-%d"))`,
  },
  {
    order: 27,
    title: "Regular Expressions",
    theory: "The re module matches patterns in text. search finds the first match, findall returns all matches, and sub replaces matches, making it powerful for validation and text extraction.",
    code: `import re

text = "Contact: hello@buttnetworks.dev or call 923004907243"

email_match = re.search(r"[\\w.-]+@[\\w.-]+", text)
phone_match = re.search(r"\\d{11,12}", text)

print(email_match.group())
print(phone_match.group())`,
  },
  {
    order: 28,
    title: "Working with CSV Files",
    theory: "The csv module reads and writes comma-separated values files. DictReader and DictWriter map rows to dictionaries keyed by column header, avoiding manual index-based access.",
    code: `import csv

with open("users.csv", "w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=["name", "role"])
    writer.writeheader()
    writer.writerow({"name": "Shahnawaz", "role": "Founder"})

with open("users.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row)`,
  },
  {
    order: 29,
    title: "Type Hints and Static Typing",
    theory: "Type hints annotate expected argument and return types without enforcing them at runtime. Tools like mypy use these annotations to catch type errors before code runs.",
    code: `def calculate_total(prices: list[float], tax_rate: float = 0.1) -> float:
    subtotal = sum(prices)
    return subtotal * (1 + tax_rate)

total: float = calculate_total([10.0, 20.0, 30.0])
print(total)`,
  },
  {
    order: 30,
    title: "Dataclasses",
    theory: "The dataclass decorator auto-generates __init__, __repr__, and __eq__ for a class based on its declared fields, reducing boilerplate for classes that mainly hold data.",
    code: `from dataclasses import dataclass

@dataclass
class Project:
    name: str
    stack: str
    active: bool = True

project = Project("Admin Dashboard", "Next.js + Express")
print(project)`,
  },
  {
    order: 31,
    title: "Enums",
    theory: "The Enum class defines a fixed set of named constant values, making code more readable and preventing invalid values compared to using plain strings or numbers.",
    code: `from enum import Enum

class Status(Enum):
    PENDING = "pending"
    ACTIVE = "active"
    COMPLETED = "completed"

current_status = Status.ACTIVE
print(current_status.name, current_status.value)`,
  },
  {
    order: 32,
    title: "Working with Environment Variables",
    theory: "python-dotenv loads key-value pairs from a .env file into the environment, and os.environ or os.getenv reads them, keeping secrets like API keys out of source code.",
    code: `import os
from dotenv import load_dotenv

load_dotenv()

groq_api_key = os.getenv("GROQ_API_KEY")
port = int(os.getenv("PORT", 5000))

print("Server starting on port", port)`,
  },
  {
    order: 33,
    title: "Building a REST API with Flask",
    theory: "Flask is a lightweight WSGI web framework. Routes are defined with the @app.route decorator, mapping URL paths and HTTP methods to view functions that return responses.",
    code: `from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/api/users", methods=["GET"])
def get_users():
    return jsonify({"users": []})

@app.route("/api/users", methods=["POST"])
def create_user():
    data = request.get_json()
    return jsonify(data), 201

if __name__ == "__main__":
    app.run(port=5000)`,
  },
  {
    order: 34,
    title: "Building a REST API with FastAPI",
    theory: "FastAPI is an async-first web framework built on type hints. It validates request and response data automatically using Pydantic models and generates interactive API docs out of the box.",
    code: `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    name: str
    email: str

@app.get("/api/users")
async def get_users():
    return {"users": []}

@app.post("/api/users")
async def create_user(user: User):
    return user`,
  },
  {
    order: 35,
    title: "SQLAlchemy ORM Basics",
    theory: "SQLAlchemy's ORM maps Python classes to database tables. A session manages transactions, and queries are expressed through Python method chains instead of raw SQL.",
    code: `from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String, unique=True)

engine = create_engine("sqlite:///app.db")
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

session.add(User(name="Shahnawaz", email="hello@buttnetworks.dev"))
session.commit()`,
  },
  {
    order: 36,
    title: "Connecting to MongoDB with PyMongo",
    theory: "PyMongo is the official MongoDB driver for Python. A MongoClient connects to a cluster, and collections expose methods like insert_one, find, and update_one for document operations.",
    code: `from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
db = client["butt_networks"]
users = db["users"]

users.insert_one({"name": "Shahnawaz", "role": "Founder"})

for user in users.find({"role": "Founder"}):
    print(user)`,
  },
  {
    order: 37,
    title: "Async/Await in Python",
    theory: "async def defines a coroutine, and await suspends it until another coroutine finishes, without blocking the event loop. asyncio.run starts the event loop and runs the top-level coroutine.",
    code: `import asyncio

async def fetch_data(delay, name):
    await asyncio.sleep(delay)
    return f"{name} done"

async def main():
    results = await asyncio.gather(
        fetch_data(1, "task1"),
        fetch_data(2, "task2"),
    )
    print(results)

asyncio.run(main())`,
  },
  {
    order: 38,
    title: "Concurrency with Threading",
    theory: "Threads let a program run multiple operations concurrently, well suited to I/O-bound tasks like network calls, though Python's GIL means threads don't provide true CPU parallelism.",
    code: `import threading
import time

def download(name):
    time.sleep(1)
    print(f"{name} downloaded")

threads = [threading.Thread(target=download, args=(f"file{i}",)) for i in range(3)]

for t in threads:
    t.start()

for t in threads:
    t.join()`,
  },
  {
    order: 39,
    title: "Parallelism with Multiprocessing",
    theory: "The multiprocessing module runs code in separate processes, each with its own Python interpreter and memory, bypassing the GIL to achieve true parallelism for CPU-bound work.",
    code: `from multiprocessing import Pool

def square(n):
    return n * n

if __name__ == "__main__":
    with Pool(4) as pool:
        results = pool.map(square, range(10))
    print(results)`,
  },
  {
    order: 40,
    title: "Working with the Requests Library",
    theory: "requests simplifies making HTTP calls from Python, handling headers, query parameters, JSON encoding, and response parsing with a much simpler interface than the standard library's urllib.",
    code: `import requests

response = requests.get(
    "https://api.github.com/users/octocat",
    headers={"Accept": "application/json"},
)

if response.status_code == 200:
    data = response.json()
    print(data["login"], data["public_repos"])`,
  },
  {
    order: 41,
    title: "Web Scraping with BeautifulSoup",
    theory: "BeautifulSoup parses HTML into a navigable tree structure, letting you search for elements by tag, class, or attribute to extract structured data from a web page.",
    code: `import requests
from bs4 import BeautifulSoup

response = requests.get("https://example.com")
soup = BeautifulSoup(response.text, "html.parser")

title = soup.find("h1").get_text()
links = [a["href"] for a in soup.find_all("a", href=True)]

print(title)
print(links)`,
  },
  {
    order: 42,
    title: "Data Analysis with Pandas",
    theory: "Pandas provides the DataFrame, a table-like structure for loading, filtering, grouping, and transforming tabular data, commonly used for cleaning and analyzing datasets.",
    code: `import pandas as pd

data = {"name": ["Ali", "Sara", "Zain"], "score": [85, 92, 78]}
df = pd.DataFrame(data)

top_scorers = df[df["score"] > 80]
average = df["score"].mean()

print(top_scorers)
print("Average:", average)`,
  },
  {
    order: 43,
    title: "Numerical Computing with NumPy",
    theory: "NumPy provides the ndarray, a fast, memory-efficient multidimensional array, along with vectorized operations that avoid slow Python-level loops for numerical computation.",
    code: `import numpy as np

matrix = np.array([[1, 2], [3, 4]])

doubled = matrix * 2
transposed = matrix.T
total = np.sum(matrix)

print(doubled)
print(transposed)
print(total)`,
  },
  {
    order: 44,
    title: "Data Visualization with Matplotlib",
    theory: "Matplotlib builds static charts and plots from data arrays. A figure and axes object are configured with labels and styles before rendering the visualization.",
    code: `import matplotlib.pyplot as plt

months = ["Jan", "Feb", "Mar", "Apr"]
revenue = [1000, 1500, 1200, 1800]

plt.plot(months, revenue, marker="o")
plt.title("Monthly Revenue")
plt.xlabel("Month")
plt.ylabel("Revenue")
plt.savefig("revenue.png")`,
  },
  {
    order: 45,
    title: "Working with APIs and Authentication",
    theory: "Many APIs require an Authorization header carrying an API key or bearer token. Reusing a requests.Session object keeps headers and cookies consistent across multiple calls to the same API.",
    code: `import requests
import os

session = requests.Session()
session.headers.update({"Authorization": f"Bearer {os.getenv('API_TOKEN')}"})

response = session.get("https://api.example.com/v1/account")
print(response.json())`,
  },
  {
    order: 46,
    title: "Unit Testing with pytest",
    theory: "pytest discovers test functions prefixed with test_ and uses plain assert statements for checks. Fixtures provide reusable setup code that can be injected into multiple test functions.",
    code: `def add(a, b):
    return a + b

def test_add_positive_numbers():
    assert add(2, 3) == 5

def test_add_negative_numbers():
    assert add(-1, -1) == -2

# Run with: pytest test_add.py`,
  },
  {
    order: 47,
    title: "Mocking in Tests",
    theory: "unittest.mock replaces real objects like network calls or database connections with fake ones during a test, letting tests run fast and deterministically without hitting external systems.",
    code: `from unittest.mock import patch

def get_weather(city):
    import requests
    response = requests.get(f"https://api.weather.com/{city}")
    return response.json()["temp"]

@patch("requests.get")
def test_get_weather(mock_get):
    mock_get.return_value.json.return_value = {"temp": 25}
    assert get_weather("Lahore") == 25`,
  },
  {
    order: 48,
    title: "Logging in Python",
    theory: "The logging module provides leveled, configurable logging that's more suitable for production than print statements, supporting different handlers and formats for console and file output.",
    code: `import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.FileHandler("app.log"), logging.StreamHandler()],
)

logger = logging.getLogger(__name__)
logger.info("Server started")
logger.error("Something went wrong")`,
  },
  {
    order: 49,
    title: "Command-Line Tools with argparse",
    theory: "argparse builds command-line interfaces by declaring expected arguments and options. It automatically generates help text and validates input types before your script's logic runs.",
    code: `import argparse

parser = argparse.ArgumentParser(description="Greet a user")
parser.add_argument("name", help="Name to greet")
parser.add_argument("--times", type=int, default=1, help="Number of greetings")

args = parser.parse_args()

for _ in range(args.times):
    print(f"Hello, {args.name}!")`,
  },
  {
    order: 50,
    title: "Packaging a Python Project",
    theory: "A pyproject.toml file declares a project's metadata and dependencies in a standardized format, allowing it to be built and published as an installable package.",
    code: `# pyproject.toml
[project]
name = "bn-toolkit"
version = "1.0.0"
description = "Internal Butt Networks utilities"
dependencies = [
    "requests>=2.31.0",
    "python-dotenv>=1.0.0",
]

[build-system]
requires = ["setuptools>=68.0"]
build-backend = "setuptools.build_meta"`,
  },
  {
    order: 51,
    title: "Working with Redis in Python",
    theory: "The redis-py client connects to a Redis server and exposes commands like get, set, and expire as Python methods, commonly used for caching and simple key-value storage.",
    code: `import redis

r = redis.Redis(host="localhost", port=6379, decode_responses=True)

r.set("user:1:name", "Shahnawaz", ex=3600)
name = r.get("user:1:name")

print(name)`,
  },
  {
    order: 52,
    title: "Building a Simple Chatbot with the Groq API in Python",
    theory: "The groq Python client mirrors the OpenAI chat completions interface, sending a list of role-tagged messages and returning a generated reply based on the configured model.",
    code: `from groq import Groq
import os

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def get_reply(user_message):
    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": "You are a helpful assistant for Butt Networks."},
            {"role": "user", "content": user_message},
        ],
    )
    return response.choices[0].message.content

print(get_reply("What services does Butt Networks offer?"))`,
  },
  {
    order: 53,
    title: "Async Web Frameworks and WebSockets",
    theory: "FastAPI supports WebSocket routes natively, accepting a persistent connection and allowing the server to send and receive messages asynchronously without repeated HTTP requests.",
    code: `from fastapi import FastAPI, WebSocket

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Echo: {data}")`,
  },
  {
    order: 54,
    title: "Building a CLI with Click",
    theory: "Click is a decorator-based library for building command-line interfaces, offering a cleaner syntax than argparse for defining commands, options, and arguments with automatic help generation.",
    code: `import click

@click.command()
@click.argument("name")
@click.option("--times", default=1, help="Number of greetings")
def greet(name, times):
    for _ in range(times):
        click.echo(f"Hello, {name}!")

if __name__ == "__main__":
    greet()`,
  },
];