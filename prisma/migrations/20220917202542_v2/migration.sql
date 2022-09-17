-- CreateTable
CREATE TABLE "Pooja" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Pooja_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pooja_title_key" ON "Pooja"("title");
