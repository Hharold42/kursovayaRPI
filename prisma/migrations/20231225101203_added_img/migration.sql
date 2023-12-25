/*
  Warnings:

  - You are about to drop the `OperationFrom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OperationTo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OperationFrom" DROP CONSTRAINT "OperationFrom_userId_fkey";

-- DropForeignKey
ALTER TABLE "OperationTo" DROP CONSTRAINT "OperationTo_operationFromId_fkey";

-- DropForeignKey
ALTER TABLE "OperationTo" DROP CONSTRAINT "OperationTo_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT;

-- DropTable
DROP TABLE "OperationFrom";

-- DropTable
DROP TABLE "OperationTo";
