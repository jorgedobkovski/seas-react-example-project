var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi(); // Mantém o gerador do .NET

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi(); // Gera o JSON
    
    // Adicione estas linhas para ter a interface visual:
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/openapi/v1.json", "v1");
    });
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();