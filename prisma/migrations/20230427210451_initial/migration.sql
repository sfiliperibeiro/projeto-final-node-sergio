/*
  Warnings:

  - You are about to drop the column `Obs` on the `consulta` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `consulta` DROP COLUMN `Obs`,
    ADD COLUMN `obs` TEXT NULL;
