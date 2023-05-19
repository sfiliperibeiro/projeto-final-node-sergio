/*
  Warnings:

  - You are about to drop the column `consultaId` on the `medico` table. All the data in the column will be lost.
  - You are about to drop the column `consultaId` on the `paciente` table. All the data in the column will be lost.
  - You are about to drop the `especialidade` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `medicoId` to the `Consulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pacienteId` to the `Consulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `especialidade` to the `Medico` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `especialidade` DROP FOREIGN KEY `Especialidade_medicoId_fkey`;

-- DropForeignKey
ALTER TABLE `medico` DROP FOREIGN KEY `Medico_consultaId_fkey`;

-- DropForeignKey
ALTER TABLE `paciente` DROP FOREIGN KEY `Paciente_consultaId_fkey`;

-- AlterTable
ALTER TABLE `consulta` ADD COLUMN `medicoId` VARCHAR(191) NOT NULL,
    ADD COLUMN `pacienteId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `medico` DROP COLUMN `consultaId`,
    ADD COLUMN `especialidade` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `paciente` DROP COLUMN `consultaId`;

-- DropTable
DROP TABLE `especialidade`;

-- AddForeignKey
ALTER TABLE `Consulta` ADD CONSTRAINT `Consulta_pacienteId_fkey` FOREIGN KEY (`pacienteId`) REFERENCES `Paciente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consulta` ADD CONSTRAINT `Consulta_medicoId_fkey` FOREIGN KEY (`medicoId`) REFERENCES `Medico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
