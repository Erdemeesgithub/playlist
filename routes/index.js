// // 1r arga
// exports.songRoutes = require("./songRoutes").songRoutes;
// exports.playlistRoutes = require("./playlistRoutes").playlistRoutes;
// 2r arga
const { userRoutes } = require("./userRoutes");
const { artistRoutes } = require("./artistRoutes");
const { songRoutes } = require("./songRoutes");
const { playlistRoutes } = require("./playlistRoutes");

module.exports = { artistRoutes, userRoutes, songRoutes, playlistRoutes };
