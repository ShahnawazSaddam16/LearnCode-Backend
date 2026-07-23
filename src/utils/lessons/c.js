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
];