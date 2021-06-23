-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL DEFAULT E'',
    "status" INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account.username_unique" ON "Account"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Account.emailAddress_unique" ON "Account"("emailAddress");
