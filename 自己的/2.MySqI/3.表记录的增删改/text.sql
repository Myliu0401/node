/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : text

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 23/10/2020 14:55:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for banjin
-- ----------------------------
DROP TABLE IF EXISTS `banjin`;
CREATE TABLE `banjin`  (
  `cid` int(0) NOT NULL,
  `banji` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `zuowei` int(0) NOT NULL,
  PRIMARY KEY (`cid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of banjin
-- ----------------------------
INSERT INTO `banjin` VALUES (1, '5', 12);
INSERT INTO `banjin` VALUES (2, '6', 13);

-- ----------------------------
-- Table structure for no1
-- ----------------------------
DROP TABLE IF EXISTS `no1`;
CREATE TABLE `no1`  (
  `bid` int(0) NOT NULL,
  `ni` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `hj` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `gr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`bid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of no1
-- ----------------------------

-- ----------------------------
-- Table structure for no2
-- ----------------------------
DROP TABLE IF EXISTS `no2`;
CREATE TABLE `no2`  (
  `pid` int(0) NOT NULL,
  `fv` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`pid`) USING BTREE,
  CONSTRAINT `no2_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `no1` (`bid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of no2
-- ----------------------------

-- ----------------------------
-- Table structure for xuesheng
-- ----------------------------
DROP TABLE IF EXISTS `xuesheng`;
CREATE TABLE `xuesheng`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `haoma` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `date` datetime(3) NOT NULL ON UPDATE CURRENT_TIMESTAMP(3),
  `xuehao` int(0) NOT NULL,
  `classid` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `classid`(`classid`) USING BTREE,
  CONSTRAINT `xuesheng_ibfk_1` FOREIGN KEY (`classid`) REFERENCES `banjin` (`cid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of xuesheng
-- ----------------------------
INSERT INTO `xuesheng` VALUES (1, 'a', '123', '2020-10-23 13:46:43.000', 122222, 1);
INSERT INTO `xuesheng` VALUES (2, 'b', '456', '2020-01-01 00:00:00.000', 11333, 2);
INSERT INTO `xuesheng` VALUES (3, 'b', '456', '2020-01-01 00:00:00.000', 11333, 2);
INSERT INTO `xuesheng` VALUES (4, 'abc', '457', '2020-10-23 14:33:20.868', 11433, 1);
INSERT INTO `xuesheng` VALUES (5, 'd', '458', '2020-01-03 00:00:00.000', 11533, 1);
INSERT INTO `xuesheng` VALUES (6, 'e', '459', '2020-01-04 00:00:00.000', 11633, 2);

SET FOREIGN_KEY_CHECKS = 1;
