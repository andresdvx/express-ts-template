BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[settings] (
    [id] INT NOT NULL IDENTITY(1,1),
    [lastSession] DATETIME2 NOT NULL CONSTRAINT [settings_lastSession_df] DEFAULT CURRENT_TIMESTAMP,
    [userId] INT NOT NULL,
    CONSTRAINT [settings_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [settings_userId_key] UNIQUE NONCLUSTERED ([userId])
);

-- AddForeignKey
ALTER TABLE [dbo].[settings] ADD CONSTRAINT [settings_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
