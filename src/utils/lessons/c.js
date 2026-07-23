module.exports = [
  {
    order: 1,
    title: "Pointers and Memory Addresses",
    theory: "A pointer is a variable that stores the memory address of another variable. The & operator gets an address, and the * operator dereferences a pointer to access the value it points to.",
    code: `#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = &num;

    printf("Value: %d\\n", *ptr);
    printf("Address: %p\\n", (void*)ptr);

    return 0;
}`,
  },
  {
    order: 2,
    title: "Dynamic Memory Allocation",
    theory: "C requires manual memory management using functions like malloc and free. malloc allocates a block of memory on the heap, and free releases it once it's no longer needed, preventing memory leaks.",
    code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr = (int*)malloc(5 * sizeof(int));

    for (int i = 0; i < 5; i++) {
        arr[i] = i * 2;
    }

    free(arr);
    return 0;
}`,
  },
  {
    order: 3,
    title: "Arrays and Pointer Arithmetic",
    theory: "An array name decays into a pointer to its first element. Adding an integer to a pointer moves it forward by that many elements, not bytes, based on the pointed to type.",
    code: `#include <stdio.h>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int *p = arr;

    for (int i = 0; i < 5; i++) {
        printf("%d\\n", *(p + i));
    }

    return 0;
}`,
  },
  {
    order: 4,
    title: "Strings and Null Termination",
    theory: "C strings are arrays of characters terminated by a null byte. Every string function relies on this terminator to know where the string ends.",
    code: `#include <stdio.h>

int main() {
    char name[6] = {'S', 'h', 'a', 'h', 'i', '\\0'};
    printf("%s\\n", name);
    return 0;
}`,
  },
  {
    order: 5,
    title: "String Functions",
    theory: "The string.h library provides functions like strlen, strcpy, strcat, and strcmp for measuring, copying, joining, and comparing null terminated strings.",
    code: `#include <stdio.h>
#include <string.h>

int main() {
    char dest[20] = "Hello, ";
    char src[] = "World";

    strcat(dest, src);
    printf("%s length %lu\\n", dest, strlen(dest));

    return 0;
}`,
  },
  {
    order: 6,
    title: "Structs",
    theory: "A struct groups related variables of different types under one name, letting you model records like a point, a person, or a date as a single unit.",
    code: `#include <stdio.h>

struct Point {
    int x;
    int y;
};

int main() {
    struct Point p1 = {3, 4};
    printf("(%d, %d)\\n", p1.x, p1.y);
    return 0;
}`,
  },
  {
    order: 7,
    title: "Typedef",
    theory: "typedef creates an alias for an existing type, commonly used to shorten struct declarations or make code more portable and readable.",
    code: `#include <stdio.h>

typedef struct {
    int x;
    int y;
} Point;

int main() {
    Point p1 = {1, 2};
    printf("(%d, %d)\\n", p1.x, p1.y);
    return 0;
}`,
  },
  {
    order: 8,
    title: "Unions",
    theory: "A union stores different data types in the same memory location, with the size of the union equal to the size of its largest member, allowing overlapping storage.",
    code: `#include <stdio.h>

union Data {
    int i;
    float f;
};

int main() {
    union Data d;
    d.i = 10;
    printf("%d\\n", d.i);
    d.f = 3.14;
    printf("%f\\n", d.f);
    return 0;
}`,
  },
  {
    order: 9,
    title: "Enums",
    theory: "An enum defines a set of named integer constants, making code that represents states or categories more readable than using raw numbers.",
    code: `#include <stdio.h>

enum Day { MON, TUE, WED, THU, FRI };

int main() {
    enum Day today = WED;
    printf("%d\\n", today);
    return 0;
}`,
  },
  {
    order: 10,
    title: "Function Pointers",
    theory: "A function pointer stores the address of a function, allowing functions to be passed as arguments, stored in arrays, or called indirectly at runtime.",
    code: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int (*fp)(int, int) = add;
    printf("%d\\n", fp(2, 3));
    return 0;
}`,
  },
  {
    order: 11,
    title: "Multi-dimensional Arrays",
    theory: "A two dimensional array is stored as a contiguous block of memory in row major order, accessed using two indices for row and column.",
    code: `#include <stdio.h>

int main() {
    int grid[2][3] = {{1, 2, 3}, {4, 5, 6}};

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", grid[i][j]);
        }
    }

    return 0;
}`,
  },
  {
    order: 12,
    title: "Pointers to Pointers",
    theory: "A pointer can itself store the address of another pointer, creating a level of indirection often used for dynamic two dimensional arrays or modifying a pointer inside a function.",
    code: `#include <stdio.h>

int main() {
    int num = 5;
    int *p = &num;
    int **pp = &p;

    printf("%d\\n", **pp);
    return 0;
}`,
  },
  {
    order: 13,
    title: "Passing Arrays to Functions",
    theory: "Arrays decay into pointers when passed to functions, so the function receives the address of the first element rather than a copy of the whole array.",
    code: `#include <stdio.h>

void printArr(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
}

int main() {
    int nums[3] = {1, 2, 3};
    printArr(nums, 3);
    return 0;
}`,
  },
  {
    order: 14,
    title: "Passing Structs to Functions",
    theory: "Structs can be passed by value, which copies the entire struct, or by pointer, which allows the function to modify the original struct directly.",
    code: `#include <stdio.h>

struct Point { int x; int y; };

void movePoint(struct Point *p, int dx, int dy) {
    p->x += dx;
    p->y += dy;
}

int main() {
    struct Point p1 = {0, 0};
    movePoint(&p1, 3, 4);
    printf("(%d, %d)\\n", p1.x, p1.y);
    return 0;
}`,
  },
  {
    order: 15,
    title: "Dynamic Arrays with realloc",
    theory: "realloc resizes a previously allocated memory block, either growing or shrinking it while preserving existing data, and returns a new pointer if the block moves.",
    code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr = malloc(3 * sizeof(int));
    arr = realloc(arr, 6 * sizeof(int));

    for (int i = 0; i < 6; i++) {
        arr[i] = i;
    }

    free(arr);
    return 0;
}`,
  },
  {
    order: 16,
    title: "File I/O Basics",
    theory: "The stdio.h library provides fopen to open a file with a given mode and fclose to close it, returning a FILE pointer used by other file functions.",
    code: `#include <stdio.h>

int main() {
    FILE *fp = fopen("data.txt", "w");
    if (fp != NULL) {
        fprintf(fp, "Hello file\\n");
        fclose(fp);
    }
    return 0;
}`,
  },
  {
    order: 17,
    title: "Reading and Writing Files",
    theory: "fread and fwrite transfer raw blocks of binary data between memory and a file, while fgets and fprintf handle line based text reading and writing.",
    code: `#include <stdio.h>

int main() {
    FILE *fp = fopen("data.txt", "r");
    char line[100];

    if (fp != NULL) {
        while (fgets(line, sizeof(line), fp)) {
            printf("%s", line);
        }
        fclose(fp);
    }

    return 0;
}`,
  },
  {
    order: 18,
    title: "Command Line Arguments",
    theory: "The main function can accept argc and argv parameters, giving access to the number of arguments and their string values passed when the program is run.",
    code: `#include <stdio.h>

int main(int argc, char *argv[]) {
    for (int i = 0; i < argc; i++) {
        printf("%s\\n", argv[i]);
    }
    return 0;
}`,
  },
  {
    order: 19,
    title: "Preprocessor Directives and Macros",
    theory: "The preprocessor runs before compilation, handling directives like #define and #include to substitute macros and insert header file contents into the source.",
    code: `#include <stdio.h>

#define SQUARE(x) ((x) * (x))

int main() {
    printf("%d\\n", SQUARE(5));
    return 0;
}`,
  },
  {
    order: 20,
    title: "Header Files and Include Guards",
    theory: "Header files declare functions and types shared across multiple source files. Include guards prevent the same header from being processed more than once in a build.",
    code: `#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int add(int a, int b);

#endif`,
  },
  {
    order: 21,
    title: "Storage Classes",
    theory: "Storage class specifiers like static, extern, auto, and register control a variable's lifetime, visibility, and storage location within a program.",
    code: `#include <stdio.h>

void counter() {
    static int count = 0;
    count++;
    printf("%d\\n", count);
}

int main() {
    counter();
    counter();
    return 0;
}`,
  },
  {
    order: 22,
    title: "const and volatile Qualifiers",
    theory: "const marks a variable as read only after initialization, while volatile tells the compiler a value may change unexpectedly and should not be optimized away.",
    code: `#include <stdio.h>

int main() {
    const int limit = 100;
    printf("%d\\n", limit);
    return 0;
}`,
  },
  {
    order: 23,
    title: "Bitwise Operators",
    theory: "Bitwise operators such as AND, OR, XOR, NOT, and shifts manipulate individual bits of integer values directly, often used for flags and low level operations.",
    code: `#include <stdio.h>

int main() {
    int a = 5;
    int b = 3;

    printf("%d\\n", a & b);
    printf("%d\\n", a | b);
    printf("%d\\n", a ^ b);
    printf("%d\\n", a << 1);

    return 0;
}`,
  },
  {
    order: 24,
    title: "Bit Fields",
    theory: "Bit fields let a struct member occupy a specific number of bits, packing multiple small values tightly together to save memory.",
    code: `#include <stdio.h>

struct Flags {
    unsigned int isActive : 1;
    unsigned int isAdmin : 1;
};

int main() {
    struct Flags f = {1, 0};
    printf("%d %d\\n", f.isActive, f.isAdmin);
    return 0;
}`,
  },
  {
    order: 25,
    title: "Recursion",
    theory: "A recursive function calls itself with a smaller version of the problem, requiring a base case to stop the recursion and prevent infinite calls.",
    code: `#include <stdio.h>

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    printf("%d\\n", factorial(5));
    return 0;
}`,
  },
  {
    order: 26,
    title: "Linked Lists",
    theory: "A singly linked list is a chain of nodes where each node holds data and a pointer to the next node, allowing dynamic growth without contiguous memory.",
    code: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

int main() {
    struct Node *head = malloc(sizeof(struct Node));
    head->data = 1;
    head->next = NULL;

    printf("%d\\n", head->data);
    free(head);
    return 0;
}`,
  },
  {
    order: 27,
    title: "Doubly Linked Lists",
    theory: "A doubly linked list adds a pointer to the previous node in addition to the next, allowing traversal in both directions through the list.",
    code: `struct Node {
    int data;
    struct Node *next;
    struct Node *prev;
};`,
  },
  {
    order: 28,
    title: "Stacks",
    theory: "A stack follows last in first out ordering, supporting push and pop operations, and can be implemented using either an array or a linked list.",
    code: `#include <stdio.h>

int stack[100];
int top = -1;

void push(int val) {
    stack[++top] = val;
}

int pop() {
    return stack[top--];
}

int main() {
    push(10);
    push(20);
    printf("%d\\n", pop());
    return 0;
}`,
  },
  {
    order: 29,
    title: "Queues",
    theory: "A queue follows first in first out ordering, supporting enqueue and dequeue operations, commonly implemented with an array using front and rear indices.",
    code: `#include <stdio.h>

int queue[100];
int front = 0, rear = 0;

void enqueue(int val) {
    queue[rear++] = val;
}

int dequeue() {
    return queue[front++];
}

int main() {
    enqueue(1);
    enqueue(2);
    printf("%d\\n", dequeue());
    return 0;
}`,
  },
  {
    order: 30,
    title: "Binary Trees",
    theory: "A binary tree is a hierarchical structure where each node has at most two children, commonly used for searching, sorting, and representing hierarchical data.",
    code: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left;
    struct Node *right;
};

struct Node* createNode(int val) {
    struct Node *n = malloc(sizeof(struct Node));
    n->data = val;
    n->left = n->right = NULL;
    return n;
}`,
  },
  {
    order: 31,
    title: "Sorting Algorithms",
    theory: "Bubble sort repeatedly steps through a list, swapping adjacent elements that are out of order, gradually moving the largest values to the end.",
    code: `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`,
  },
  {
    order: 32,
    title: "Searching Algorithms",
    theory: "Binary search finds a target value in a sorted array by repeatedly halving the search range, comparing the target to the middle element each time.",
    code: `#include <stdio.h>

int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1;

    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }

    return -1;
}`,
  },
  {
    order: 33,
    title: "Function Recursion and the Call Stack",
    theory: "Each recursive call pushes a new stack frame containing its own local variables and return address, which is why unbounded recursion can cause a stack overflow.",
    code: `#include <stdio.h>

int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

int main() {
    printf("%d\\n", fib(6));
    return 0;
}`,
  },
  {
    order: 34,
    title: "Variadic Functions",
    theory: "Variadic functions accept a variable number of arguments using the stdarg.h macros va_start, va_arg, and va_end to iterate over the extra parameters.",
    code: `#include <stdio.h>
#include <stdarg.h>

int sum(int count, ...) {
    va_list args;
    va_start(args, count);

    int total = 0;
    for (int i = 0; i < count; i++) {
        total += va_arg(args, int);
    }

    va_end(args);
    return total;
}`,
  },
  {
    order: 35,
    title: "Error Handling with errno",
    theory: "Many standard library functions set the global variable errno when an error occurs, which can be checked and translated into a message using perror or strerror.",
    code: `#include <stdio.h>
#include <errno.h>

int main() {
    FILE *fp = fopen("missing.txt", "r");
    if (fp == NULL) {
        perror("fopen failed");
    }
    return 0;
}`,
  },
  {
    order: 36,
    title: "The switch Statement",
    theory: "A switch statement compares a value against multiple constant cases, executing the matching branch, and falls through to subsequent cases unless a break is used.",
    code: `#include <stdio.h>

int main() {
    int day = 3;

    switch (day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        default:
            printf("Other day\\n");
    }

    return 0;
}`,
  },
  {
    order: 37,
    title: "Multi-file Programs and Linking",
    theory: "Large C programs are split across multiple source files sharing declarations through headers, then combined by the linker into a single executable after separate compilation.",
    code: `int add(int a, int b) {
    return a + b;
}`,
  },
  {
    order: 38,
    title: "Memory Layout",
    theory: "A running C program's memory is divided into segments including the stack for local variables, the heap for dynamic allocation, and static areas for globals.",
    code: `#include <stdio.h>

int globalVar = 10;

int main() {
    int localVar = 5;
    int *heapVar = malloc(sizeof(int));

    printf("%d %d\\n", globalVar, localVar);
    free(heapVar);
    return 0;
}`,
  },
  {
    order: 39,
    title: "Array of Structs",
    theory: "An array of structs stores multiple records of the same type contiguously in memory, letting you loop through and access each record's fields by index.",
    code: `#include <stdio.h>

struct Student {
    char name[20];
    int grade;
};

int main() {
    struct Student students[2] = {
        {"Ali", 90},
        {"Sara", 85}
    };

    for (int i = 0; i < 2; i++) {
        printf("%s: %d\\n", students[i].name, students[i].grade);
    }

    return 0;
}`,
  },
  {
    order: 40,
    title: "Sizeof and Data Type Sizes",
    theory: "The sizeof operator returns the number of bytes occupied by a type or variable, which is essential for correctly allocating memory and understanding data representation.",
    code: `#include <stdio.h>

int main() {
    printf("%lu\\n", sizeof(int));
    printf("%lu\\n", sizeof(double));
    printf("%lu\\n", sizeof(char));
    return 0;
}`,
  },
];