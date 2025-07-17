class FeedItem {
  constructor(id, title, body, linkUrl, imageUrl) {
    this.id = id; 
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
  }
}


const feedItems = [];

function createFeedItem(title, body, linkUrl, imageUrl) {
  const id = feedItems.length.toString(); 
  const newItem = new FeedItem(id, title, body, linkUrl, imageUrl);
  feedItems.push(newItem);
  return newItem;
}

function getAllFeedItems() {
  return feedItems;
}

function getFeedItemById(id) {
  return feedItems.find(item => item.id === id);
}

function deleteFeedItemById(id) {
  const index = feedItems.findIndex(item => item.id === id);
  if (index !== -1) {
    return feedItems.splice(index, 1)[0];
  }
  return null;
}

function updateFeedItemById(id, updates) {
  const item = getFeedItemById(id);
  if (!item) return null;


  Object.keys(updates).forEach(key => {
    if (item[key] !== undefined && updates[key] !== undefined) {
      item[key] = updates[key];
    }
  });

  return item;
}

module.exports = {
  createFeedItem,
  getAllFeedItems,
  getFeedItemById,
  deleteFeedItemById,
  updateFeedItemById
};
