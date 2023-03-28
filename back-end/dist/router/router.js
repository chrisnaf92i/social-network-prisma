"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = require("../controller/post");
const router = (0, express_1.Router)();
router.get("/api/post", post_1.getAllPost);
exports.default = router;
