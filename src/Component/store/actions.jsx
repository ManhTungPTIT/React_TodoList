export const setAdd = (payload) => ({
  type: "ADD_ITEM",
  payload,
});

export const setUpdate = (payload) => ({
  type: "UPDATE_ITEM",
  payload,
});

export const setCancel = (payload) => ({
  type: "CANCEL",
  payload,
});
