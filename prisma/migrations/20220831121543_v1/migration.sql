-- CreateTable
CREATE TABLE "Bhakt" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "full_name" VARCHAR(255) NOT NULL,
    "password_hash" TEXT NOT NULL,

    CONSTRAINT "Bhakt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bhakt_email_key" ON "Bhakt"("email");
