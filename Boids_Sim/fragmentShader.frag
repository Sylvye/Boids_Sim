#version 330 core
in vec3 pos;
out vec4 FragColor;
void main()
{
	FragColor = vec4(pos.x+0.5f, pos.y+0.5f, pos.z+0.5f, 1.0f);
}