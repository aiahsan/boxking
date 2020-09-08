let lastId = 0;

export default function(prefix='dsg-obj-') {
    lastId++;
    return `${prefix}${lastId}`;
}