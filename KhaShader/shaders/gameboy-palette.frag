#ifdef SYNTHCLIPSE
#include <synthclipse>
#endif

#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D tex; //! texture["debug1.png", filter: GL_NEAREST]
varying vec2 texCoord;
varying vec4 color;


void kore()
{
  vec3 color = texture2D(tex, texCoord).rgb;

  float gamma = 1.5;
  color.r = pow(color.r, gamma);
  color.g = pow(color.g, gamma);
  color.b = pow(color.b, gamma);

  vec3 col1 = vec3(0.612, 0.725, 0.086);
  vec3 col2 = vec3(0.549, 0.667, 0.078);
  vec3 col3 = vec3(0.188, 0.392, 0.188);
  vec3 col4 = vec3(0.063, 0.247, 0.063);

  float dist1 = length(color - col1);
  float dist2 = length(color - col2);
  float dist3 = length(color - col3);
  float dist4 = length(color - col4);

  float d = min(dist1, dist2);
  d = min(d, dist3);
  d = min(d, dist4);

  if (d == dist1) {
    color = col1;
  }
  else if (d == dist2) {
    color = col2;
  }
  else if (d == dist3) {
    color = col3;
  }
  else {
    color = col4;
  }

  gl_FragColor = vec4(color, 1.0).rgba;
}

void main(){
	kore();
}

