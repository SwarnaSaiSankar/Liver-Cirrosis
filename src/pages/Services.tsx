import { BsUpload } from "react-icons/bs";
import { CiChat1 } from "react-icons/ci";
import { RiCpuLine } from "react-icons/ri";
import { BiGitMerge } from "react-icons/bi";
import { FiRefreshCcw } from "react-icons/fi";
import { MdInsights } from "react-icons/md";
import Test from "../asserts/SlidingImages/Test.png";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const Services = () => {
  const services = [
    {
      icon: BsUpload,
      title: "Upload & Analyze",
      description: "Upload your dental scans and get comprehensive AI-powered analysis and diagnosis.",
      features: ["High-accuracy scanning", "Multiple format support", "Quick results"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: CiChat1,
      title: "AI Chat Consultation",
      description: "Discuss your dental concerns with our AI assistant for personalized advice and guidance.",
      features: ["24/7 availability", "Personalized responses", "Treatment suggestions", "Follow-up care"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      
      <div className="min-h-screen pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white to-white dark:from-black dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={Test}
                  alt="AI Technology in Action"
                  className="w-full h-[500px] object-cover hidden md:block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Smart Liver Diagnostics</h3>
                  <p className="text-gray-200">Harnessing transformer-based AI models to achieve real-time, high-accuracy liver segmentation from CT scans.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Driven by<span className="text-blue-600"> Medical Imaging</span>
              </h2>
              <div className="grid grid-cols-2 gap-6 mt-32">
                <div className="text-center">
                  <RiCpuLine className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">PVT-Based Encoding</h3>
                  <p className="text-sm text-muted-foreground">Pretrained Pyramid Vision Transformer for Hierarchical Feature Extraction</p>
                </div>
                <div className="text-center">
                  <BiGitMerge className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Refined Decoding</h3>
                  <p className="text-sm text-muted-foreground">Hierarchical Multi-scale Fusion</p>
                </div>
                <div className="text-center">
                  <FiRefreshCcw className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Residual Learning</h3>
                  <p className="text-sm text-muted-foreground">Enhanced Feature Representation</p>
                </div>
                <div className="text-center">
                  <MdInsights className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Proven Clinical Accuracy</h3>
                  <p className="text-sm text-muted-foreground">Benchmark-Tested Performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-300 dark:from-gray-800 dark:to-gray-900">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <CardHeader className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;