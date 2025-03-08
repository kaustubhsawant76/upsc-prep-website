import { motion } from "framer-motion";

export default function AISection() {
  return (
    <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}
      className="p-10">
      <h2 className="text-3xl font-bold">AI-Powered Learning</h2>
      <p className="mt-4">Leverage AI-driven analytics to track progress.</p>
    </motion.div>
  );
}
