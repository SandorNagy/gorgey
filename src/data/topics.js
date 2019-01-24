const topics = [
  {
    id: 'ef0883b8-14f7-47c1-8471-536c032d6716',
    title: 'Egyetemes történelem az ókorban (Kr. e. 776 – Kr. u. 476)',
    subtitle: 'Ókori ki-kicsoda',
    description: 'Melyik ókori személyiséget írja körül az állítás? Legjobb tudásod szerint válaszolj a kérdésre!'
  },
  {
    id: 'ef0883b8-14f7-47c1-8471-536c032d6717',
    title: 'Integer posuere',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.'
  },
  {
    id: 'ef0883b8-14f7-47c1-8471-536c032d6718',
    title: 'Integer posuere',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.'
  },
  {
    id: 'ef0883b8-14f7-47c1-8471-536c032d6719',
    title: 'Integer posuere',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.'
  },
  {
    id: 'ef0883b8-14f7-47c1-8471-536c032d6720',
    title: 'Integer posuere',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.'
  },
  {
    id: 'ef0883b8-14f7-47c1-8471-536c032d6721',
    title: 'Integer posuere',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.'
  },
  {
    id: 'ef0883b8-14f7-47c1-8471-536c032d6722',
    title: 'Integer posuere',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.'
  },
  {
    id: 'ef0883b8-14f7-47c1-8471-536c032d6723',
    title: 'Integer posuere',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.'
  },
  {
    id: 'ef0883b8-14f7-47c1-8471-536c032d6724',
    title: 'Integer posuere',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.'
  },
  {
    id: 'ef0883b8-14f7-47c1-8471-536c032d6725',
    title: 'Integer posuere',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.'
  },
  {
    id: 'ef0883b8-14f7-47c1-8471-536c032d6726',
    title: 'Integer posuere',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.'
  },
  {
    id: 'ef0883b8-14f7-47c1-8471-536c032d6727',
    title: 'Integer posuere',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.'
  },
];

const getAllTopics = () => topics;
const getTopicByTopicId = topicId =>
    topics.filter(element => element.id === topicId);
export {
  getAllTopics,
  getTopicByTopicId
};
