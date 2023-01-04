// 1r arga
exports.songRoutes = require("./songRoutes").songRoutes
exports.playlistRoutes = require("./playlistRoutes").playlistRoutes
// 2r arga
const {userRoutes} = require("./userRoutes")
const {artistRoutes} = require("./artistRoutes")

module.exports = {artistRoutes, userRoutes}