import { nanoid } from "nanoid";
import { db } from "../db";
import { questions, userAnswers } from "../db/schema";
import { seedQuestions } from "../lib/seed-data";

async function main() {
  console.log("Limpando dados existentes...");
  await db.delete(userAnswers);
  await db.delete(questions);

  console.log(`Inserindo ${seedQuestions.length} questões...`);
  for (const q of seedQuestions) {
    await db.insert(questions).values({ id: nanoid(), ...q });
  }

  console.log("Seed concluído com sucesso.");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => process.exit(0));
