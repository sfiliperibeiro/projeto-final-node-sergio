/*
  Warnings:

  - Added the required column `updatedAt` to the `Especialidade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Medico` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `especialidade` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `medico` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
