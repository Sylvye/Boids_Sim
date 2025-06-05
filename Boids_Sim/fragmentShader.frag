#version 330 core
in vec3 vertexColor;
out vec4 FragColor;
void main()
{
	FragColor = vec4(vertexColor.x+0.5f, vertexColor.y+0.5f, vertexColor.z+0.5f, 1.0f);
}