-- CreateTable
CREATE TABLE "OperationFrom" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "OperationFrom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperationTo" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "operationFromId" INTEGER NOT NULL,

    CONSTRAINT "OperationTo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OperationFrom" ADD CONSTRAINT "OperationFrom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperationTo" ADD CONSTRAINT "OperationTo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperationTo" ADD CONSTRAINT "OperationTo_operationFromId_fkey" FOREIGN KEY ("operationFromId") REFERENCES "OperationFrom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
