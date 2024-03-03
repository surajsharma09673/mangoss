using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Mango.Services.ShoppingCartAPI.Migrations
{
    /// <inheritdoc />
    public partial class RenaminingTableCartDetail : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CCartDetails_CartHeaders_CartHeaderId",
                table: "CCartDetails");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CCartDetails",
                table: "CCartDetails");

            migrationBuilder.RenameTable(
                name: "CCartDetails",
                newName: "CartDetails");

            migrationBuilder.RenameIndex(
                name: "IX_CCartDetails_CartHeaderId",
                table: "CartDetails",
                newName: "IX_CartDetails_CartHeaderId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CartDetails",
                table: "CartDetails",
                column: "CartDetailId");

            migrationBuilder.AddForeignKey(
                name: "FK_CartDetails_CartHeaders_CartHeaderId",
                table: "CartDetails",
                column: "CartHeaderId",
                principalTable: "CartHeaders",
                principalColumn: "CartHeaderId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartDetails_CartHeaders_CartHeaderId",
                table: "CartDetails");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CartDetails",
                table: "CartDetails");

            migrationBuilder.RenameTable(
                name: "CartDetails",
                newName: "CCartDetails");

            migrationBuilder.RenameIndex(
                name: "IX_CartDetails_CartHeaderId",
                table: "CCartDetails",
                newName: "IX_CCartDetails_CartHeaderId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CCartDetails",
                table: "CCartDetails",
                column: "CartDetailId");

            migrationBuilder.AddForeignKey(
                name: "FK_CCartDetails_CartHeaders_CartHeaderId",
                table: "CCartDetails",
                column: "CartHeaderId",
                principalTable: "CartHeaders",
                principalColumn: "CartHeaderId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
