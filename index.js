/* const queue = [];
queue.unshift(1);
queue.unshift(2);
queue.unshift(3);
queue.unshift(4);

console.log(queue.pop());

console.log(queue);
 */

const Queue = () => {
  const data = [];

  const add = value => {
    data.unshift(value);
  };

  const remove = () => {
    if (data.length === 0) {
      return -1;
    }
    const value = data[data.length - 1];
    data.slice(data.length - 1, 1);
    return value;
  };

  const print = () => console.log(data);

  return {
    add,
    remove,
    print
  };
};

const queue = Queue();
queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);

queue.print();
console.log(queue.remove());
